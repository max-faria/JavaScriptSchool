export default function ProfileSection(props) {
  return (
    <div {...props} className={`${props.className} border-t py-4 px-10`}>
      {props.children}
    </div>
  );
}
