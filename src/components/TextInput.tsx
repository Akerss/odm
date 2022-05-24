import React from 'react'
import { useRecoilState } from 'recoil';
import { textState } from '../store';

export default function TextInput() {
	let [text, setText] = useRecoilState(textState)
	let onchange = (e: any) => {
		console.log(e.target.value);
		setText(e.target.value)
	}
	return (
		<div>
			<input type="text" value={text} onChange={onchange} />
		</div>
	)
}
