import { selectCode } from "@/store/slices/codeSlice";
import type { Code } from "@/types/code";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { useDispatch } from "react-redux";

interface CodeTreeProps {
  codes: Code[]
}

function CodeTree({ codes }: CodeTreeProps) {
  const dispatch = useDispatch()

  const rootCodes = codes.filter((code) => code.parentId === null)

  return (
    <SimpleTreeView
      // 선택된 항목이 바뀌었을 때 실행되는 이벤트
      // _는 첫 번째 인자(선택 변경을 발생시킨 이벤트 객체)를 받기는 하지만 우리는 사용하지 않겠다는 관례적 표현
      onSelectedItemsChange={(_, itemId) => {
        dispatch(selectCode(itemId))
      }}
    >
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