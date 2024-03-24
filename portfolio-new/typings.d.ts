import { Image } from 'sanity'
interface sanitybody {
    _createdAt: string
    _updatedAt: string
    _rev: string
    _id: string
}
export interface skill extends sanitybody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string
}
export interface PageInfo extends sanitybody {
    _type: "pageInfo";
    address: string;
    role: string;
    heroImage: Image;
    name: string;
    backgroundInformation: string;
    profilePic: Image;
    email: string;
    phoneNumber: string
}
export interface Technology extends sanitybody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string
  }
export interface Experience extends sanitybody {
    _type: "experience";
    jobtitle: string;
    company: string;
    imageUrl: string;
    technologies: Technology[];
    points: string[];
    datestarted: Date;
    dateended: Date;
    iscurrentlyworkinghere: boolean;
  }
export interface Project extends sanitybody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}
export interface Social extends sanitybody {
    _type: "social";
    title: string;
    url: string;
}