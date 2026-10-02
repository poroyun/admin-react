import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store'
import type { Code } from '@/types/code'
import { getCodesApi } from '@/api/codeApi';
import CodeTree from '@/components/codes/CodeTree';
import PageHeader from '@/components/common/page-header/PageHeader';
import CodeForm from '@/components/codes/CodeForm';

function CodeManagement() {
  const [codes, setCodes] = useState<Code[]>([])

  const selectedCodeId = useSelector(
    (state: RootState) => state.code.selectedCodeId,
  )

  const selectedCode = codes.find(
    (code) => code.id === selectedCodeId,
  )

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
        <CodeForm code={selectedCode} />
      </div>
    </div>
  )
}

export default CodeManagement