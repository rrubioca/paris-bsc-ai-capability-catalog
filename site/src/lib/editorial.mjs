import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import { parseDocument } from './content.mjs';

const overviewRows = new Set(['Business question', 'Experience', 'Audience', 'Potential value']);
const overviewSections = new Set(['The demonstration story', 'The VSS demonstration story', 'Prepare a BSC discussion']);
const businessFields = new Set(['Problem and audience:', 'Discovery:', 'Evaluation focus:']);

// Contract for the future authenticated editor. This is not an authorization service.
export function editableRanges(file, markdown) {
  const doc = parseDocument({ path: file }, markdown);
  const ranges = [];
  let section = '';
  for (const node of doc.tree.children) {
    if (node.type === 'heading' && node.depth === 2) section = toString(node);
    if (file === 'docs/demo-overview.md') {
      if (overviewSections.has(section) && ['paragraph', 'list'].includes(node.type)) ranges.push({ ...node.position, key: `${section}:${node.type}` });
      if (node.type === 'table' && node.children.some(row => toString(row.children[0]) === 'Catalog entry')) {
        for (const row of node.children.slice(1)) if (overviewRows.has(toString(row.children[0]))) ranges.push({ ...row.children[1].position, key: toString(row.children[0]) });
      }
    }
    if (file === 'docs/business-use-cases.md' && node.type === 'paragraph' && businessFields.has(toString(node.children[0]))) ranges.push({ ...node.position, key: toString(node.children[0]) });
  }
  return ranges;
}

function protectedStructure(file, markdown) {
  const doc = parseDocument({ path: file }, markdown);
  const ranges = editableRanges(file, markdown).sort((a, b) => b.start.offset - a.start.offset);
  let result = markdown;
  // Strip only editable values; field identities and links remain protected below.
  for (const range of ranges) result = result.slice(0, range.start.offset) + `[EDITORIAL VALUE:${range.key}]` + result.slice(range.end.offset);
  const links = [];
  visit(doc.tree, node => { if (['link', 'image', 'definition'].includes(node.type)) links.push(node.url); });
  return { result: result.replaceAll('\r\n', '\n'), links };
}

export function assertMarketingEdit(file, before, after) {
  if (!['docs/demo-overview.md', 'docs/business-use-cases.md'].includes(file)) throw new Error('Technical or governance source requires technical review');
  const oldStructure = protectedStructure(file, before);
  const newStructure = protectedStructure(file, after);
  if (JSON.stringify(oldStructure) !== JSON.stringify(newStructure)) throw new Error('Change affects protected structure, status, IDs or references');
  // Formatting must keep the same field labels so a future form cannot drop a boundary.
  if (editableRanges(file, before).length !== editableRanges(file, after).length) throw new Error('Change removes an editorial field');
  return true;
}

export const editorialContract = {
  commercial: {
    'docs/demo-overview.md': { tableValues: [...overviewRows], sections: [...overviewSections] },
    'docs/business-use-cases.md': { fields: [...businessFields] }
  },
  protected: ['IDs and heading anchors', 'pilot status', 'TC / DEMO / VAL / EVD', 'roadmap progress', 'reference destinations', 'security and publication policy'],
  futureBranding: { source: 'docs/assets/brand/', activation: 'Explicit asset approval and editor authentication required; not enabled in phase 1' }
};
