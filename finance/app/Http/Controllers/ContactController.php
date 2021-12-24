<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all()->toArray();
        return array_reverse($contacts);
    }

    public function store(Request $request)
    {
        $contact = new Contact([
            'email' => $request->input('email'),
            'subject' => $request->input('subject'),
            'message' => $request->input('message')
        ]);
        $contact->save();

        return response()->json('Contact created!');
    }

    public function show($id)
    {
        $contact = Contact::find($id);
        return response()->json($contact);
    }

    public function update($id, Request $request)
    {
        $contact = Contact::find($id);
        $contact->update($request->all());

        return response()->json('Contact updated!');
    }

    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();

        return response()->json('Contact deleted!');
    }
}
