// PageHeader
// ├─ 왼쪽 영역
// │  ├─ title
// │  └─ description
// │
// └─ PageHeaderRight
//    ├─ Button
//    ├─ 안내문
//    └─ 그 외 필요한 UI

import { Typography } from "@mui/material";
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
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1
            }}
          >
            {description}
          </Typography>
        )}
      </div>
      {children}
    </div>
  )
}

export default PageHeader