export interface IThread {
   id?: number;
   content?: string;
   image?: IThreadImage[];
   author: IAuthor;
}

export interface IThreadImage {
   id?: number;
   url?: string;
}

export interface IAuthor {
   id?: number;
   username?: string;
   fullname?: string;
   profile?: IProfile;
}

interface IProfile {
   bio?: string;
   avatar?: string;
   cover?: string;
}
