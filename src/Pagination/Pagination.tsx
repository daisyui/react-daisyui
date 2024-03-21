import React from 'react';
import Button, { ButtonProps } from '../Button';
import Join from '../Join'
import { DOTS, usePagination } from './usePagination';
import clsx from 'clsx';

export type PaginationProps = {
    onPageChange?: (currentPage: number) => void;
    currentPage?: number;
    pageSize?: number;
    totalCount: number;
    siblingCount?: number;
    classNameRoot?: string;
    className?: string;
    size?: ButtonProps['size'];
    variant?: ButtonProps['variant'];
    buttonProps?: ButtonProps;
    previousLabel?: React.ReactNode;
    nextLabel?: React.ReactNode;
    showTotal?: (total: number, range: number[]) => React.ReactNode;
    simple?: boolean | ((currentPage: number) => React.ReactNode);
}

function Pagination(props: PaginationProps) {
    const {
        totalCount,
        siblingCount = 1,
        currentPage: currentPageDefault = 1,
        pageSize = 10,
        previousLabel = "<",
        nextLabel = ">",
        simple,
        onPageChange,
        classNameRoot,
        className,
        showTotal,
        size,
        variant,
        buttonProps: buttonPropsDefault,
    } = props;

    const buttonProps = React.useMemo(() => ({ ...buttonPropsDefault, size, variant }), [buttonPropsDefault, size, variant])

    const [currentPage, setCurrentPage] = React.useState(currentPageDefault)

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onClick = (pageNumber: number) => {
        if (pageNumber === currentPage) {
            return
        }
        setCurrentPage(pageNumber)
        onPageChange?.(pageNumber);
    }

    const onNext = () => {
        const newCurrentPage = currentPage + 1
        setCurrentPage(newCurrentPage)
        onPageChange?.(newCurrentPage)
    };

    const onPrevious = () => {
        const newCurrentPage = currentPage - 1
        setCurrentPage(newCurrentPage)
        onPageChange?.(newCurrentPage)
    };

    function renderButtons() {
        if (simple) {
            if (typeof simple === 'function') {
                return (
                    <Button {...buttonProps} className='join-item'>{simple(currentPage)}</Button>
                )
            }
            return null
        }
        return paginationRange.map((pageNumber, idx) => {
            return (
                <Button {...buttonProps} onClick={() => onClick(pageNumber as number)} key={idx} className='join-item' color={currentPage === pageNumber ? 'primary' : undefined} disabled={pageNumber === DOTS}>{pageNumber}</Button>
            )
        })

    }

    const lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className={clsx("flex items-center gap-4", classNameRoot)}>
            {showTotal?.(totalCount, [(currentPage - 1) * pageSize + 1, Math.min(currentPage * pageSize, totalCount)])}
            <Join className={className}>
                <Button {...buttonProps} className='join-item' onClick={onPrevious} disabled={currentPage === 1}>{previousLabel}</Button>
                {renderButtons()}
                <Button {...buttonProps} className='join-item' onClick={onNext} disabled={currentPage === lastPage}>{nextLabel}</Button>
            </Join>
        </div>
    )
}
export default Pagination
