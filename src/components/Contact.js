const Contact = () =>{
    return (
        <div>
            <h2 className="font-bold text-2xl p-3 m-3">Contact Us Page</h2>
            <form>
                <input
                type="text"
                className="border border-black p-2 m-2"
                placeholder="name"
                />
                <input type = 'text'
                className="border border-black p-2 m-2"
                placeholder="message"
                />
                <button className="border border-black m-2 p-2 bg-black text-white rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact;