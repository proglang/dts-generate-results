var Evernote = require('evernote');
var client = new Evernote.Client(token: token);
var noteStore = client.getNoteStore();
var filter = new Evernote.NoteStore.NoteFilter({
  words: ['one', 'two', 'three'],
  ascending: true
});
var spec = new Evernote.NoteStore.NotesMetadataResultSpec({
  includeTitle: true,
  includeContentLength: true,
  includeCreated: true,
  includeUpdated: true,
  includeDeleted: true,
  includeUpdateSequenceNum: true,
  includeNotebookGuid: true,
  includeTagGuids: true,
  includeAttributes: true,
  includeLargestResourceMime: true,
  includeLargestResourceSize: true,
});

noteStore.findNotesMetadata(filter, 0, 500, spec).then(function(notesMetadataList) {
  // data.notes is the list of matching notes
});
