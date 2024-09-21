type translation_structure = {
    Header: {
        title:string,
        meta_description:string,
    }
    PresentationPage: {
        main_title: string,
        presentation: string
    },
    MenuBar: {
        about: string,
        works: string,
        contact: string
    },
    Works:{
        startups_title: string,
        title: string,
        portfolio_project_card_title: string,
        portfolio_project_content: {
            content: JSX.Element
        }
        sparked_project_card_title: string,
        sparked_project_content: {
            intro: JSX.Element,
            whatIsSparked_title: string,
            whatIsSparked: JSX.Element,
            myRole_title: string,
            myRole: JSX.Element,
            myRoadmap_title: string,
            myRoadmap1: JSX.Element,
            myRoadmap2: JSX.Element,
            myRoadmap3: JSX.Element,
            acknowledgements_title: string,
            acknowledgements: JSX.Element,
            gallery_title: string,


        }
        microengineers_project_card_title: string,
        microengineers_project_content: {
            content1: JSX.Element,
            myRole_title: string,
            content2: JSX.Element,
            content3: JSX.Element,
        }
        stablediffusion_card_title: string,
        stablediffusion_project_content: {
            content: JSX.Element
        }
        visual_perceptron_card_title: string,
        visual_perceptron_project_content: {
            content: JSX.Element
        }
        hardware_project_card_title: string,
        hardware_project_content: {
            content: JSX.Element
        }
        autoencoder_card_title: string,
        autoencoder_project_content: {
            explanation_1: JSX.Element,
            explanation_2: JSX.Element,
        }
        sorting_algorithms_project_card_title:string,
        sorting_algorithms_project_content: {
            content: JSX.Element
        }
        link_to_web:string,
        github_link_to_repo_text: string,
    },
    About: {
        title: string,
        aboutme: {
            doc_title:string,
            content1:string,
            check_mycrospace_work:string,
            check_fairjourney_work:string,
            check_sparked_work:string,
            content2:string,
            content3:string,
            content4:string,
        },
        soft_skills: {
            variable:string,
            self_taught:string,
            likes_challenges:string,
            entrepreneur:string,
            leadership:string,
            startup_culture:string,
            creative:string,
            fast_learner:string,
        },
        skills_code:{
            doc_title: string,
            general_info_comment:string,
            name_variable: string,
            getProgrammingLanguages_function: string,
            getNaturalLanguages_function: string,
            birth_month: string,
            language_variable:string,
            native_value:string,
            english_language:string,
            spanish_language:string,
            catalan_language:string,
            french_language:string,
        },
        skills: {
            doc_title:string,
            habilities_transcribed_text: string,
            habilities_transcribed_content: string,
        }
        studies: {
            doc_title:string,
            content:string
        },
        cv:{
            doc_title:string,
            web_title:string,
            web_description:string,
            web_contact_info_link:string,
            web_download_cv_button:string,
            web_check_cv_description:string,
            web_check_cv_button:string,
        },
        work_experience: {
            doc_title:string,
            sciling_work_experience:string,
            neurocatching_work_experience:string,
            vestaz_work_experience:string,
        },
        conctactme: {
            doc_title:string,
            content: string,
        }
    },
    Contact: {
        title: string
    }
}
