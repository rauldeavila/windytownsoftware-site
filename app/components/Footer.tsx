export default function Footer() {
  return (
    <footer className="border-t-4 border-[#333] bg-[#333333] p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-xl retro-text text-[#f5f5f5]">
          &copy; {new Date().getFullYear()} windytown software. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
