export default function Avatar(props){
    return(
        <img
        src={props.avatar}
        alt={props.name}
        className="avatar rounded-full drop-shadow-lg mx-auto mt-8 mb-4 py-4 px-4 w-3/4"
      />
    )
}