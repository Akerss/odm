import React from 'react'
import { useRecoilValue } from 'recoil'
import { textlength } from '../store'

export default function ShowText() {
  let length = useRecoilValue(textlength)
  return (
    <div>{length}</div>
  )
}
