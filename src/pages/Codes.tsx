import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store'
import type { Code } from '@/types/code'
import { createCodeApi, getCodesApi, updateCodeApi } from '@/api/codeApi';
import CodeTree from '@/components/codes/CodeTree';
import PageHeader from '@/components/common/page-header/PageHeader';
import PageHeaderRight from '@/components/common/page-header/PageHeaderRight';
import CodeForm from '@/components/codes/CodeForm';
import { Button } from '@mui/material';
import { selectCode } from '@/store/slices/codeSlice';

function CodeManagement() {
  const [codes, setCodes] = useState<Code[]>([])

  const dispatch = useDispatch()

  const selectedCodeId = useSelector(
    (state: RootState) => state.code.selectedCodeId,
  )

  const selectedCode = codes.find(
    (code) => code.id === selectedCodeId,
  )

  const handleSave = async (data: Partial<Code>) => {
    if (selectedCode) {
      await updateCodeApi(selectedCode.id, data)
    } else {
      await createCodeApi(data as Omit<Code, 'id'>)
    }

    const updatedCodes = await getCodesApi()
    setCodes(updatedCodes)
  }

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
        >
          <PageHeaderRight>
            <Button
              variant='contained'
              onClick={() => {
                dispatch(selectCode(null))
              }}
            >신규 등록</Button>
          </PageHeaderRight>
        </PageHeader>
        <CodeTree codes={codes} />
        <CodeForm
          key={selectedCode?.id ?? 'new'}
          code={selectedCode}
          codes={codes}
          onSave={handleSave}  
        />
      </div>
    </div>
  )
}

export default CodeManagement