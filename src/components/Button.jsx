import './Button.css'

export default function(props){
  return(
    <div>
      <button className='Button'>{props.label}</button>
    </div>
  )
}