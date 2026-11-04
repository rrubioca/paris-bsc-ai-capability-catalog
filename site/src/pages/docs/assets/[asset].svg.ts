import path from 'node:path';
import { assets } from '../../../lib/manifest.mjs';
import dataFlow from '../../../../../docs/assets/rag-data-flow.svg?raw';
import automationFlow from '../../../../../docs/assets/rag-automation-flow.svg?raw';

const content = new Map([
  ['docs/assets/rag-data-flow.svg', dataFlow],
  ['docs/assets/rag-automation-flow.svg', automationFlow]
]);

export function getStaticPaths() {
  return assets.map(file => ({ params: { asset: path.basename(file, '.svg') }, props: { file, svg: content.get(file) } }));
}

export function GET({ props }: { props: { file: string; svg: string } }) {
  if (!assets.includes(props.file) || !props.svg) return new Response(null, { status: 404 });
  return new Response(props.svg, {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' }
  });
}
