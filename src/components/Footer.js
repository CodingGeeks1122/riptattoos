import SimpleReactFooter from "simple-react-footer";

const description = "Rip Tattoos stands for Rage Ink Plague where we customise your design as per latest trend. We are on this bussiness since 2009 whre we are guided by Great Artist Abhijeet Dhaila. As we were located in Lajpat nagar before has been shut down due to covid crisis so we have looking forward to Dwarka , gurgaon to give them best services by us.                          Address: 3rd Floor, Manish Metro Plaza-1, Pkt 5, Sector 12 Dwarka, New Delhi, Delhi 110075";
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