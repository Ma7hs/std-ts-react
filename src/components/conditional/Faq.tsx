import Questions from "./Questions";

export default function Faq(){
    return(
        <div className="flex flex-col gap-5 w-3/4">
            <Questions question="Qual eh meu nome?" aswers="Matheus Siqueira Silva"/>
            <Questions question="What is an framework?" aswers="Framework is a Dev Tools how help them to make a development easily"/>
            <Questions question="A Bia eh o amor da sua vida?" aswers="Sim, ela eh o amor da minha vida, coisa mais linda do mundo!"/>
            <Questions question="Quem eh o homem mais lindo do mundo?" aswers="O Matheus Siqueira, conhece ele? Caso nao, devia conhecer ele eh muito legal e muito gente boa!"/>
        </div>
    )
}