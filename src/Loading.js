import React from 'react'

export default function Loading(props) {
    return (
        <div className="timeout loading-div">
            <p className="loading-p">{props.message}</p>
            <img alt="loading" src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/adding-a-loading-page-to-website/Images/chromecapture.gif" />
        </div>
    )
}
