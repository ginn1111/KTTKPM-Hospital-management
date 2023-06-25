import { employeeLoadingSelector } from '@/slices/employeeSlice/selectors';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';

type ModalUpdateProps = {
  open: boolean;
  data: Partial<Employee>;
  isAdd?: boolean;
};

const useUpdateEmployee = () => {
  const [modalUpdate, setModalUpdate] = useState<ModalUpdateProps>({
    open: false,
    data: {},
    isAdd: false,
  });

  const isLoading = useAppSelector(employeeLoadingSelector);

  const handleOpen = (data: Partial<Employee>) =>
    setModalUpdate({ open: true, data });

  const handleClose = () => setModalUpdate({ open: false, data: {} });

  const handleOpenAdd = () =>
    setModalUpdate({ isAdd: true, open: true, data: {} });

  return {
    modalUpdate,
    isLoading,
    handleOpen,
    handleClose,
    handleOpenAdd,
  };
};

export default useUpdateEmployee;
export type { ModalUpdateProps };
