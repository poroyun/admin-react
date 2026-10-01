import type { Code } from "@/types/code";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'

interface CodeTreeProps {
  codes: Code[]
}

function CodeTree({ codes }: CodeTreeProps) {
  const rootCodes = codes.filter((code) => code.parentId === null)

  return (
    <SimpleTreeView>
      {rootCodes.map((code) => {
        const childCodes = codes.filter(
          (child) => child.parentId === code.id,
        )

        return (
          <TreeItem
            key={code.id}
            itemId={code.id}
            label={code.name}
          >
            {childCodes.map((child) => (
              <TreeItem
                key={child.id}
                itemId={child.id}
                label={child.name}
              />
            ))}
          </TreeItem>
        )
      })}
    </SimpleTreeView>
  )
}

export default CodeTree