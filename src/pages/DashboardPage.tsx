
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const { user } = useAuth();
  
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              You are signed in as {user?.email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is your dashboard where you'll be able to manage your thoughts and ideas.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Tips to make the most of ThoughtFlow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Start by creating your first thought collection and connecting ideas together.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Account</CardTitle>
            <CardDescription>
              Account details and subscription
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>You're currently on the free tier. Upgrade to access premium features.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
