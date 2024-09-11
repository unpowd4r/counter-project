import { useState } from 'react'
import { Button } from './Button'

export const CounterMain = () => {
	let [count, setCount] = useState(0)

	const incrementCounter = () => {
		if (count < 5) {
			setCount(count + 1)
		}
	}
	const resetCounter = () => {
		setCount(0)
	}

	const disabledInc = count === 5
	const disabledReset = count === 0

	return (
		<div className='counter__window'>
			<div className='counter__background'>
				<h1 className={count === 5 ? 'redCounter' : ''}>{count}</h1>
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
