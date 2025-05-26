import { CalendarDays, Briefcase, GraduationCap } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Vellas 시큐어코딩 연수생",
      company: "Vellas (싱가포르)",
      period: "2024.01 - 2024.02",
      description: "시큐어코딩 방법론 학습 및 실무 프로젝트 참여",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "UMC Spring Boot 파트장",
      company: "UMC",
      period: "2023.03 - 2023.08",
      description: "Spring Boot 파트를 이끌며 멘토링 및 교육 진행",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "심화캡스톤 수업 조교(TA)",
      company: "경기대학교",
      period: "2023.03 - 2023.08",
      description: "학생들의 프로젝트 개발 지원 및 기술 멘토링",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "중앙 밴드 동아리 아르페지오 회장단",
      company: "경기대학교",
      period: "2022.02 - 2022.12",
      description: "동아리 운영 및 행사 기획, 리더십 경험",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "DLAB 평촌 강사",
      company: "DLAB",
      period: "2022.06 - 2022.12",
      description: "중학생 대상 HTML, CSS 강의 진행",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Date bubble */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transform -translate-y-1/2 md:-translate-x-1/2 z-10">
              {exp.icon}
            </div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-2 text-gray-400">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
