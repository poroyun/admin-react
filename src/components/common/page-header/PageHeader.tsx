// PageHeader
// ├─ 왼쪽 영역
// │  ├─ title
// │  └─ description
// │
// └─ PageHeaderRight
//    ├─ Button
//    ├─ 안내문
//    └─ 그 외 필요한 UI

import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string
  description: string
  children?: ReactNode
}

function PageHeader({
  title,
  description,
  children
}: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h1>
        <p className="text-sm leading-relaxed text-slate-500">
          {description}
        </p>
      </div>
      {children}
    </div>
  )
}

export default PageHeader