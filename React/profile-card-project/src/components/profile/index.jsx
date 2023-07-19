import Avatar from "../Avatar";
import FollowButton from "../FollowButton";
import Linkbutton from "../LinkButton";
import Title from "../Title";
import ProfileSection from "./profileSection";

export default function Profile(props) {
  return (
    <div className="container bg-slate-50 rounded-2xl drop-shadow-md text-center w-fit">
      <img
        src={props.avatar}
        alt={props.name}
        className="avatar rounded-full drop-shadow-lg mx-auto mt-8 mb-4 py-4 px-4 w-3/4"
      />
      <Title>
        {props.name}
        <FollowButton></FollowButton>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className="flex flex-col gap-4 items-center"
        id="links-section"
        data-set="some-values"
        aria-label="social links"
      >
        <Linkbutton href={props.githubUrl}>GitHub</Linkbutton>
        <Linkbutton href={props.linkedinUrl}>LinkedIn</Linkbutton>
        <Linkbutton href={props.twitterUrl}>Twitter</Linkbutton>
      </ProfileSection>
    </div>
  );
}
