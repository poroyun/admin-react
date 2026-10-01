import { useEffect, useState } from 'react';
import PageHeader from '@/components/common/page-header/PageHeader';
import { getCodesApi } from '@/api/codeApi';
import type { Code } from '@/types/code'
import CodeTree from '@/components/codes/CodeTree';

function CodeManagement() {
  const [codes, setCodes] = useState<Code[]>([])

  useEffect(() => {
    const fetchCodes = async () => {
      const data = await getCodesApi()

      setCodes(data)
    }

    fetchCodes()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full">
        <PageHeader
          title="코드 관리"
          description="시스템에서 사용하는 공통 코드를 관리합니다."
        />
      <CodeTree codes={codes} />
      </div>
    </div>
  )
}

export default CodeManagement