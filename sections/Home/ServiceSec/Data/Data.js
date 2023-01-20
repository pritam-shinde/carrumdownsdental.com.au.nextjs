import WisdomTeeth from '../../../../public/Home/service/wisdom-teeth-removal.jpg'
import DentalImplants from '../../../../public/Home/service/dental-implants.jpg';
import ChildBenefits from '../../../../public/Home/service/child-dentistry.jpg'
import Denture from '../../../../public/Home/service/dentures.jpg'

const Data = [
    {
        id:"Home_service-1",
        title:"WISDOM TEETH REMOVAL",
        link:"/service/wisdom-teeth-removal/",
        para:"Our Dentist can perform wisdom tooth removal in an affordable pain freeway, starting from $200*.",
        Image: WisdomTeeth.src,
        alt:"Wisdom Teeth Removal"
    },
    {
        id:"Home_service-2",
        title:"DENTAL - IMPLANTS",
        link:"/service/dental-implants/",
        para:"Renew your smile and chewing ability. We offer complete implant procedure including Implant, Abutment and Crown.",
        Image: DentalImplants.src,
        alt:"Dental - Implants"
    },
    {
        id:"Home_service-3",
        title:"CHILD BENEFIT",
        link:"/service/child-benefit/",
        para:"Eligible Kids can get up to $1000* worth of Free dental services.",
        Image: ChildBenefits.src,
        alt:"Child Benefit"
    },
    {
        id:"Home_service-4",
        title:"DENTURE",
        link:"/service/dentures/",
        para:"You don’t have to live with missing teeth. At Carrum Downs Dental we have affordable denture options.",
        Image: Denture.src,
        alt:"Denture"
    }
];

export default Data