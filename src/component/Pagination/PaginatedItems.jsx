import React from 'react'
import { Pagination } from 'react-bootstrap';
import { useState } from 'react';

export default function PaginatedItems({ postPerPage, totalPost, paginate }) {
    console.log(postPerPage, totalPost, 'postPerPage');
    const [pageNow, setPageNow] = useState()
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <>
            <Pagination>
                <Pagination.First onClick={() =>paginate(1)}/>
                <Pagination.Prev onClick={() =>paginate(!pageNow - 1)}/>
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={() => {paginate(number); setPageNow(number)} }>{number}</Pagination.Item>
                ))}
                <Pagination.Next />
                <Pagination.Last onClick={() =>paginate(pageNumbers.length)}/>
            </Pagination>
        </>

    )
}
