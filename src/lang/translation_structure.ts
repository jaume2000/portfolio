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
        title: string,
        portfolio_project_card_title: string,
        stablediffusion_card_title: string,
        visual_perceptron_card_title: string,
        hardware_project_card_title: string,
        github_link_to_repo_text: string,
    },
    About: {
        title: string,
        general_info_comment:string,
        name_variable: string,
        birth_variable: string,
        soft_skills: {
            variable:string,
            self_taught:string,
            likes_challenges:string,
            entrepeneur:string,
            leadership:string,
            startup_culture:string,
            creative:string,
            fast_learner:string,
        },
        getProgrammingLanguages_function: string,
        getNaturalLanguages_function: string,
        birth_month: string,
        language_variable:string,
        native_value:string,
        english_language:string,
        spanish_language:string,
        catalan_language:string,
        french_language:string,
        habilities_text:string,
        habilities_transcribed_text: string,
        habilities_transcribed_content: string,
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
            neurocatching_work_experience:string
        }
    },
    Contact: {
        title: string
    }
}
