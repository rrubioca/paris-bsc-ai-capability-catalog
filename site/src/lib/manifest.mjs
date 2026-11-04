// Publication is opt-in. This is routing policy, not a second content catalog.
export const repository = 'https://github.com/rrubioca/paris-bsc-ai-capability-catalog';
export const base = '/paris-bsc-ai-capability-catalog';
export const documents = [
  ['README.md', 'catalog', 'commercial'],
  ['CONTRIBUTING.md', 'contributing', 'governance'],
  ['SECURITY.md', 'security', 'governance'],
  ['docs/navigation.md', 'docs/navigation', 'orientation'],
  ['docs/demo-overview.md', 'docs/demo-overview', 'commercial'],
  ['docs/business-use-cases.md', 'docs/business-use-cases', 'commercial'],
  ['docs/architecture.md', 'docs/architecture', 'technical'],
  ['docs/capabilities.md', 'docs/capabilities', 'technical'],
  ['docs/compatibility.md', 'docs/compatibility', 'technical'],
  ['docs/demonstrations.md', 'docs/demonstrations', 'technical'],
  ['docs/validation.md', 'docs/validation', 'technical'],
  ['docs/limitations.md', 'docs/limitations', 'technical'],
  ['docs/provenance.md', 'docs/provenance', 'technical'],
  ['docs/references.md', 'docs/references', 'technical'],
  ['docs/publication-review.md', 'docs/publication-review', 'governance'],
  ['docs/roadmap.md', 'docs/roadmap', 'roadmap']
].map(([path, route, audience]) => ({ path, route, audience }));

export const assets = [
  'docs/assets/rag-data-flow.svg',
  'docs/assets/rag-automation-flow.svg'
];

export function pageUrl(route, prefix = base) {
  return `${prefix.replace(/\/$/, '')}/${route}/`.replace(/\/+/g, '/');
}
