import { ChangeEvent, SetStateAction, useState } from 'react'
import './App.css'

function App() {

	const [search, setSearch] = useState('')

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<div className="App">
			<div className='search'>
				<input style={{width:'inhert'}} type='text' list='autoComplete' value={search} onChange={(e) => handleChange(e)}/>
				<div style={{width:'100px'}}>
					{ search !== '' && <AutoComplete searchTerm={search} /> }
				</div>
			</div>
			<div style={{position: 'relative', zIndex: 0}}>
				<p>Notes:</p>
				<p>use state: set intial in bracket, use square brackets eg </p>
				<code>const [count, setCount] = useState(0)</code>
				<p>input boxes: have a value using the use state and the on change to change it </p>
				<p>Dropdown: data list element with a list attribute corrosponding to the id of the datalist</p>

				<p> flex boxs, container has display flex and direction of growth</p>
				<p> width inherit will grow element to the dix size</p>
				<p> conditional rendering is and and not ??</p>
				<p> margin auto will center a div</p>
				<p> To get on top use a relative div which you want it to render then absolute contents and z indexs </p>

				<p>to render a list of divs make the list in a variable then render the variable</p>
			</div>

		</div>
	)
}

function AutoComplete(props: {searchTerm: string}) {

	const searchTerm = props.searchTerm;
	const results = ['pancake', 'delicious']

	const resultItems = results.map(word => {
		return <ResultItem word={word} image={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg'}/> 
	});

	return (<div className='searchPadding' style={{position: 'absolute',  zIndex: 99, borderStyle: 'dotted', background: 'purple', width: '39.5%'}}>
				{resultItems}
			</div>
	)
}

function ResultItem(props: {word: string, image: string}) {
	return (
		<div style={{display: 'flex'}}>
			<img src={props.image} style={{width: '100px'}}/>
			<p>{props.word}</p>
		</div>
	)
}

export default App
