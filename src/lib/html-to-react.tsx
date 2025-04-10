import parse, { DOMNode, Element } from 'html-react-parser'
import Card from '@/components/Card' 

export function htmlToReactComponents(html: string) {
  return parse(html, {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.tagName === 'Card') {
        const title = domNode.attribs.title
        const children = parse(domNode.children.map((c) => 'data' in c ? c.data : '').join(''))

        return <Card title={title}>{children}</Card>
      }
    }
  })
}
