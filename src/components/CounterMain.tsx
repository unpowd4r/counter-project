import { useState } from 'react'
import { Button } from './Button'

const MAX_VALUE = 5
const MIN_VALUE = 0

export const CounterMain = () => {
	let [count, setCount] = useState(0)

	const incrementCounter = () => {
		if (count < MAX_VALUE) {
			setCount(count + 1)
		}
	}
	const resetCounter = () => {
		setCount(0)
	}

	const disabledInc = count === MAX_VALUE ? true : false
	const disabledReset = count === MIN_VALUE ? true : false

	return (
		<div className='counter__window'>
			<div className='counter__background'>
				<h1 className={count === MAX_VALUE ? 'redCounter' : ''}>{count}</h1>
			</div>
			<div className='buttons__items'>
				<Button
					activeButton={disabledInc}
					title={'inc'}
					onClick={incrementCounter}
				/>
				<Button
					activeButton={disabledReset}
					title={'reset'}
					onClick={resetCounter}
				/>
			</div>
		</div>
	)
}
