import { parseISO, formatDistanceToNow } from "date-fns";

import React from 'react'

const Time = ({timestamp}) => {
    let time = ''

    if(timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)

        time = `${timePeriod} agp`
    }


  return (
    <span title={timestamp}>
        &nbsp; <i>{time}</i>
    </span>
  )
}

export default Time