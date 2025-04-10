import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { Paragraph, Root, HTML, Text } from 'mdast'

const remarkCardShortcode: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (!parent || typeof index !== 'number') return

      // On ne traite que les paragraphes qui contiennent un seul enfant de type text
      if (node.children.length !== 1 || node.children[0].type !== 'text') return

      const textNode = node.children[0] as Text
      const value = textNode.value

      const regex = /^\[Card\s+title="(.+?)"\]([\s\S]*?)\[\/Card\]$/m
      const match = value.match(regex)
      if (!match) return

      const [, title, content] = match

      const htmlNode: HTML = {
        type: 'html',
        value: `<Card title="${title}">${content.trim()}</Card>`,
      }

      parent.children.splice(index, 1, htmlNode)
    })
  }
}

export default remarkCardShortcode
