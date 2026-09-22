import type { ReactNode } from "react";

interface PageHeaderRightProps {
  children: ReactNode
}

function PageHeaderRight({
  children
}: PageHeaderRightProps) {
  return (
    <div className="flex items-end gap-2">
      {children}
    </div>
  )
}

export default PageHeaderRight