import { useState } from 'react';
import { moneyFormat } from '../helpers';

function Header({ total, money }) {
    return (
        <>
            {total > 0 && money - total !== 0 && (
                <div className='header'>
                    You have <span>$ {moneyFormat(money - total)} </span> left to spend!
                </div>
            )}
            {total === 0 && (
                <div className='header'>
                    You have <span>$ {moneyFormat(money)}</span>  to spend!
                </div>
            )}
            {money - total === 0 && (
                <div className='header'>
                    You are out of money. People without money are useless people!
                </div>
            )}
            <style jsx>{`
            .header{
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #20b820, #14be2a);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 24px;
                letter-spacing: 1px;
                }

            .header span{
                margin: 0 10px;
                font-weight: bold;
            }
            `}</style>
        </>
    )
}

export default Header;