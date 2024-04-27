

type Props = {
    type:string,
    className:string,
    icon: any
}

const Button = ({type, className , icon}:Props) => {
  return (
    <div className={className}>
      {icon} {type}
    </div>
  )
}

export default Button