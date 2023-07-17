export default function Profile(props) {
  return (
    <div className="container bg-slate-50 rounded-2xl drop-shadow-md text-center w-fit">
      <img
        src={props.avatar}
        alt={props.name}
        className="avatar rounded-full drop-shadow-lg mx-auto mt-8 mb-4 py-4 px-4 w-3/4"
      />
      <h2 className="text-xl font-semibold py-4 px-10 text-2xl">
        {props.name}
      </h2>
      <div className="border-t py-4 px-10">{props.bio}</div>
      <div className="border-t py-4 px-10">{props.phone}</div>
      <div className="border-t py-4 px-10">{props.email}</div>
      <div className="border-t py-4 px-10 flex flex-col gap-4 items-center">
        <a
          href="{props.githubUrl}"
          target="_blank"
          className="bg-linkblue bg-gradient-to-r from-linearfrom to-linearto rounded-xl drop-shadow-sm width-700 font-bold duration-200 w-40 hover:drop-shadow-md hover:mb-1 p-2 text-white"
        >
          GitHub
        </a>
        <a
          href="{props.linkedinbUrl}"
          target="_blank"
          className="bg-linkblue bg-gradient-to-r from-linearfrom to-linearto rounded-xl drop-shadow-sm width-700 font-bold duration-200 w-40 hover:drop-shadow-md hover:mb-1 p-2 text-white"
        >
          LinkedIn
        </a>
        <a
          href="{props.twitterUrl}"
          target="_blank"
          className="bg-linkblue bg-gradient-to-r from-linearfrom to-linearto rounded-xl drop-shadow-sm width-700 font-bold duration-200 w-40 hover:drop-shadow-md hover:mb-1 p-2 text-white"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
