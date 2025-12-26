import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send } from "lucide-react"
import { mockMessages } from "@/lib/mock-data"

/**
 * Patient Dashboard - AI Chat Page
 * Placeholder UI for AI chat functionality
 */
export default function PatientChatPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Chat</h1>
        <p className="text-muted-foreground">
          Chat with MedAssist AI for health inquiries and appointment scheduling
        </p>
      </div>

      {/* Chat Interface */}
      <Card className="flex h-[600px] flex-col">
        {/* Chat Header */}
        <CardHeader className="border-b">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">MedAssist AI</CardTitle>
              <p className="text-xs text-muted-foreground">Online • Ready to help</p>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <ScrollArea className="flex-1">
          <CardContent className="p-4">
            <div className="space-y-4">
              {mockMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "patient"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === "patient"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "patient"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
