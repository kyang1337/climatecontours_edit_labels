/** @file Contains the global variables used in LabelMe. */

// Parsed LabelMe XML file. Manipulate this variable with jquery.
var LM_xml;

// URL of CGI script to submit XML annotation:
var SubmitXmlUrl = 'annotationTools/perl/submit.cgi';

// LabelMe username:
var username = 'anonymous';

// Boolean indicating whether user is currently signing in (this should be abstracted into class):
var username_flag = 0;

// Boolean indicating if we will use attributes. This should be read from the URL and set to 0 by default.
var use_attributes = 1; // if this is 0, then it will remove all the attributes from the bubble.
var use_parts = 1; // if this is 0 disapears the message from the bubble

// for now, let's remove the attributes in MT mode. Just in case anybody is trying this.
if (getQueryVariable('mode')=='mt'){
    //use_attributes=0;
    //use_parts = 0;
}

// Boolean indicating whether the control points were edited:
var editedControlPoints = 0;

// Scalar indicating which polygon is selected; -1 means no polygon is selected
var selected_poly = -1;

// Class with functions to handle actions/events.
var main_handler;

// Canvas that renders polygons at rest state.
var main_canvas;

// Holds image.
var main_media;

// URL of XHTML namespace. This is needed for generating SVG elements.
var xhtmlNS = 'http://www.w3.org/1999/xhtml';

// Website that refers to LabelMe:
var ref;

// Indicates whether we are in segmentation or polygon mode
var drawing_mode = 0;
var showImgName = false;

// Scribble mode:
var scribble_mode = true;
var threed_mode = false;
var video_mode = false;
var bounding_box = false;
var bbox_mode = true;
var autocomplete_mode = false;


// Support serialized deletions
var replace_delete = 0;
var deleted_object_name;

// Disable editing type for pregenerated events
var pregenerated = 0;

/* TODO: Implement this with a heap or other structure for efficiency
   Correct numbering for editing events - currently, this only ensures
   that the numbering is unique. */
var tc_array = [];
var ar_array = [];

var wait_for_input;
var edit_popup_open = 0;
var num_orig_anno;
var global_count = 0;
var req_submit;

// Indicates if polygon has been edited.
var submission_edited = 0;

// Allowable user actions:
var action_CreatePolygon = 1;
var action_RenameExistingObjects = 0;
var action_ModifyControlExistingObjects = 0;
var action_DeleteExistingObjects = 0;

// Which polygons are visible:
var view_Existing = 1;
var view_Deleted = 0;

// Flag for right-hand object list:
var view_ObjList = true;

// ClimateNet event variables:
var tc_count = 0;
var ar_count = 0;

//Session ID to track:
if (localStorage.getItem("session_id") == null) {
    var session_id_array = new Uint32Array(1);
    window.crypto.getRandomValues(session_id_array);
    localStorage.session_id = session_id_array[0];
}

// Image counter
var img_counter = 0;

// Toggle counter
// var toggle_counters = [0, 0];
var toggle_list = ["tmq_wind_bot", "tmq", "tmq_wind_850", "ivt", "vor_psl_ivt", "vorticity", "vor_psl"];

// Mechanical Turk variables:
var LMbaseurl = 'http://' + window.location.host + window.location.pathname;
var MThelpPage = 'annotationTools/html/mt_instructions.html';
var externalSubmitURL = 'https://www.mturk.com/mturk/externalSubmit';
var externalSubmitURLsandbox = 'https://workersandbox.mturk.com/mturk/externalSubmit';
var mt_N = 'inf';

var object_choices = '...';

var loaded_once = false;
