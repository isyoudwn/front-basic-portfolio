import { ArrowRight, Database, Server, Code, Github, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ExperienceTimeline from "@/components/experience-timeline"
import BlogPostCard from "@/components/blog-post-card"
import ContactForm from "@/components/contact-form"
import SkillBadge from "@/components/skill-badge"
import GitHubCalendar from "@/components/github-calendar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-black bg-opacity-70 backdrop-blur-sm px-8 py-6 rounded-lg border border-gray-800">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  임채연
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-blue-400">
                  Backend Developer
                </h2>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <Link
                href="https://github.com/isyoudwn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-full"
              >
                <Github className="h-5 w-5" />
                <span>github.com/isyoudwn</span>
              </Link>
              <Link
                href="mailto:dlacodus0407@gmail.com"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded-full"
              >
                <Mail className="h-5 w-5" />
                <span>dlacodus0407@gmail.com</span>
              </Link>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              유지보수성과 확장성, 비용 효율성을 균형 있게 고려하는 백엔드 개발자입니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <SkillBadge icon={<Server className="w-4 h-4" />} label="Spring Boot" />
              <SkillBadge icon={<Database className="w-4 h-4" />} label="MySQL" />
              <SkillBadge icon={<Code className="w-4 h-4" />} label="Java" />
              <SkillBadge icon={<Github className="w-4 h-4" />} label="DevOps" />
            </div>
            <Button asChild className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
              <Link href="#projects">
                프로젝트 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">GitHub 활동</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-5xl mx-auto">
            <GitHubCalendar username="isyoudwn" />
            <div className="text-center mt-4">
              <Link
                href="https://github.com/isyoudwn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
              >
                <span>GitHub 프로필 방문하기</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-4">
                쿼리 튜닝과 인덱스 설계 등 로우레벨 최적화에서 출발해, 필요할 때에만 아키텍처를 확장하는 방식을
                추구합니다.
              </p>
              <p className="text-gray-300 mb-6">
                보안성과 성능을 함께 고민하며, 작지만 단단한 구조에서 시작해 필요한 순간에 확장하는 개발을 지향합니다.
              </p>
              <h3 className="text-xl font-semibold mb-3">핵심역량</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>보안성과 성능을 함께 고민합니다</li>
                <li>Query Tuning 및 인덱스 설계 기반의 데이터 처리 최적화</li>
                <li>아키텍처 설계를 통한 시스템 성능 최적화</li>
                <li>Github을 이용한 협업 경험</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <p className="text-gray-300">Java, Spring Boot, Node.js, Express</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">ORM/Query</h3>
                <p className="text-gray-300">JPA, QueryDSL</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Database</h3>
                <p className="text-gray-300">MySQL, MongoDB, Redis</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">DevOps</h3>
                <p className="text-gray-300">Docker, Github Actions, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Univeus - Refactoring"
              description="UNIVEUS의 backend를 SpringBoot로 변경하고 성능을 개선한 대학생 커뮤니티 플랫폼입니다."
              tags={[
                "Spring Boot",
                "Java",
                "Docker",
                "JPA",
                "QueryDSL",
                "MySQL",
                "MongoDB",
                "Redis",
                "Quartz",
                "Github Action",
              ]}
              link="https://github.com/isyoudwn/univeus"
            />
            <ProjectCard
              title="Univeus - Original"
              description="UNIVEUS 축제를 위한 서비스로 Web View App 형태의 대학 축제 정보 제공 플랫폼입니다."
              tags={["JavaScript(ES6)", "MySQL", "Node.js", "Express"]}
              link="https://github.com/UMC-UNIVEUS/UNIVEUS-backend-before-festival"
            />
            <ProjectCard
              title="Auction(경매 프로젝트)"
              description="실시간 경매 시스템 구현으로 효율적인 입찰 처리와 실시간 업데이트 기능을 제공합니다."
              tags={["Spring Boot", "Java", "Docker", "JPA", "QueryDSL", "MySQL", "Redis"]}
              link="https://github.com/TaskSprints/auction"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogPostCard
              title="UNIVEUS Main Page 조회 성능 개선"
              excerpt="OFFSET 방식의 페이지네이션을 No-Offset 방식으로 개선하여 조회 성능을 최적화한 경험을 공유합니다."
              date="2023-10-15"
              link="https://velog.io/@yuze_dbwm/UNIVEUS-Main-Page-%EC%A1%B0%ED%9A%8C-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0-1-OFFSET"
            />
            <BlogPostCard
              title="백엔드 리소스를 Private Subnet에 위치 시켜보자 (1)"
              excerpt="백엔드 리소스들을 Private Subnet에 위치시키는 이유와 방법에 대해 알아봅니다."
              date="2023-09-20"
              link="https://velog.io/@yuze_dbwm/%EB%B0%B1%EC%97%94%EB%93%9C-%EB%A6%AC%EC%86%8C%EC%8A%A4%EB%93%A4%EC%9D%84-Private-Subnet%EC%97%90-%EC%9C%84%EC%B9%98-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EC%9E%901"
            />
            <BlogPostCard
              title="백엔드 리소스를 Private Subnet에 위치 시켜보자 (2)"
              excerpt="RDS를 Private Subnet에 배치하는 방법과 이점에 대해 자세히 알아봅니다."
              date="2023-09-27"
              link="https://velog.io/@yuze_dbwm/%EB%B0%B1%EC%97%94%EB%93%9C-%EB%A6%AC%EC%86%8C%EC%8A%A4%EB%A5%BC-Private-Subnet%EC%97%90-%EC%9C%84%EC%B9%98-%EC%8B%9C%EC%BC%9C%EB%B3%B4%EC%9E%90-2-RDS-Private-Subnet%EC%97%90-%EB%B0%B0%EC%B9%98"
            />
            <BlogPostCard
              title="Spring Boot에서 효율적인 예외 처리하기"
              excerpt="Spring Boot에서 전역 예외 처리와 커스텀 예외를 활용한 효율적인 예외 처리 방법을 소개합니다."
              date="2023-08-10"
              link="#"
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="https://velog.io/@yuze_dbwm">
                더 많은 글 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Education & Certification Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & Certification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-medium mb-2">경기대학교, 컴퓨터공학부 (4.02/4.5)</h4>
                <p className="text-gray-400 mb-4">2020 - 2024</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>운영체제, 알고리즘, 자료구조 등 기초 CS 지식 학습</li>
                  <li>웹보안, 네트워크 보안, 정보보호개론, 블록체인 플랫폼 등 보안과목 수강</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-2">Vellas 시큐어코딩 연수</h4>
                <p className="text-gray-400 mb-4">2024.01 - 2024.02</p>
                <p className="text-gray-300 mb-3">시큐어코딩 방법론과 실무 적용 기술 학습</p>
                <Link
                  href="https://www.kyeonggi.com/article/20240122580321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                >
                  <span>연수 관련 기사 보기</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Certification</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">정보처리기사</h4>
                  <p className="text-gray-400">한국산업인력공단</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">SQLD</h4>
                  <p className="text-gray-400">한국데이터산업진흥원</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">TOPCIT LEVEL 3</h4>
                  <p className="text-gray-400">정보통신기획평가원</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-medium mb-2">OPIc (IH)</h4>
                  <p className="text-gray-400">ACTFL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 임채연 백엔드 개발자 포트폴리오. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="https://github.com/isyoudwn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link href="mailto:dlacodus0407@gmail.com" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </Link>
              <Link
                href="https://velog.io/@yuze_dbwm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
