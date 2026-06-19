import type { SocialLink } from '../types/index';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


export const SOCIALS: SocialLink[] = [
    {   
        label: 'FaLinkedin',    
        href: 'https://www.linkedin.com/in/miracle-igboanusi-b5463b338/', 
        icon: FaLinkedin, 
        color: '#0A66C2' 
    },
    { 
        label: 'GitHub',      
        href: 'https://github.com/Mira0803/',                 
        icon: FaGithub,   
        color: '#ffffff' 
    },

    { 
        label: 'Twitter (X)', 
        href: 'https://x.com/Sunshine_MiraJ',                               
        icon: FaXTwitter,  
        color: '#1DA1F2' 
    },
    { 
        label: 'Email', 
        href: 'mailto:miracleigboanusi@gmail.com',
        icon: MdEmail,
        color: '#ef4444' },
];

export const FOOTER_SOCIALS: SocialLink[] = [
    { 
        label: 'LinkedIn',    
        href: 'https://www.linkedin.com/in/miracle-igboanusi-b5463b338/', 
        icon: FaLinkedin, 
        color: '#0A66C2' 
    },
    { 
        label: 'GitHub',      
        href: 'https://github.com/Mira0803/',                              
        icon: FaGithub,   
        color: '#ffffff' 
    },
    { 
        label: 'Twitter (X)', 
        href: 'https://x.com/Sunshine_MiraJ',                               
        icon: FaXTwitter,  
        color: '#1DA1F2' 
    },
    { 
        label: 'Email', 
        href: 'mailto:miracleigboanusi@gmail.com',
        icon: MdEmail,
        color: '#ef4444' 
    },
];