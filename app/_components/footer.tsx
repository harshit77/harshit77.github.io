import Image from "next/image";
import Link from "next/link";

const socialMedias=[{
    src:"./link.svg",
    alt:"Linked In",
    url:"https://www.linkedin.com/in/harshit-sahu-3a898827"
},{
    src:"./git.svg",
    alt:"GitHub",
    url:"https://github.com/harshit77"
},
{
    src:"./whatsapp.svg",
    alt:"Whatsapp",
    url:"https://api.whatsapp.com/send?phone=918840213727"
}]

const Footer = () => {
  return (
    <div className="flex justify-between items-center text-white py-10">
        <div>Copyright &copy; 2024 Harshit Sahu</div>
        <div className="flex gap-2">
            {socialMedias.map((socialMedia,index)=><SocialMedia key={index} {...socialMedia}/>)}
        </div>
    </div>
  )
}

type SocialMediaProps= {
src:string,
alt:string,
url:string
}

const SocialMedia = ({src,alt,url}:SocialMediaProps) => {
  return (
    <div className="border border-neutral-500 p-1 rounded-lg cursor-pointer">
        <Link href={url} target="_blank">
            <Image src={src} alt={alt} width={20} height={20}/>
        </Link>
    </div>
  )
}

export default Footer