"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 여기에 실제 이메일 전송 로직을 구현할 수 있습니다
      // 예: 이메일 API 호출 또는 서버 액션 사용

      // 이메일 주소로 직접 메일 보내기 (임시 구현)
      const mailtoLink = `mailto:dlacodus0407@gmail.com?subject=포트폴리오 문의: ${formData.name}&body=${formData.message}%0A%0A보낸 사람: ${formData.name}%0A이메일: ${formData.email}`
      window.open(mailtoLink)

      // 성공 메시지 표시
      toast({
        title: "메시지가 전송되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      })

      // 폼 초기화
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "전송 실패",
        description: "메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            이름
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="홍길동"
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            이메일
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          메시지
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="메시지를 입력해주세요"
          required
          className="min-h-[150px] bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-6"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            전송 중...
          </span>
        ) : (
          <span className="flex items-center">
            메시지 보내기 <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}
