import SimpleReactFooter from "simple-react-footer";

const description = "Rip Tattoos in Dwarka Sector 12, Delhi listed under Tattoo Artists offering services like Colour Tattoo, Offer Home Services and much more.                           Address: 3rd Floor, Malik Buildcon Plaza-1, Pkt 5, Pocket 5, Sector 12 Dwarka, Dwarka, New Delhi, Delhi 110075";
const title = "RIP Tattoos";
const columns = [
{
    title: "Resources",
    resources: [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Admin",
            link: "/admin"
        }
    ]
},
{
    title: "Legal",
    resources: [
        {
            name: "Privacy",
            link: "/privacy"
        },
        {
            name: "Terms",
            link: "/terms"
        }
    ]
},
{
    title: "Visit",
    resources: [
        {
            name: "Locations",
            link: "/locations"
        },
        {
            name: "Culture",
            link: "/culture"
        }
    ]
}
];
 
const Footer = () => {
    return (
    <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        linkedin=""
        facebook="riptattoos09"
        twitter=""
        instagram="riptattoos_delhi"
        youtube="?"
        pinterest=""
        copyright="riptattoos"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
    />
    )
}

export default Footer;