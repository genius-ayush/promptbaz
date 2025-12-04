
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
      <main className="flex-1 p-4">
  
  <div className="flex items-center justify-center ">
    {children}
  </div>
</main>
  )
}