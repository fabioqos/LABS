( function( window, $, rh, undefined ) {
    Drupal.behaviors.webux = {
        attach: function( context, settings ) {
            rh.webux = {};

            // jscs:disable validateIndentation

// Requires the utils.js file be included as well for breakpoint validation
if ( typeof rh.webux.utils === "undefined" ) {
    //--- Global utility variables
rh.webux.utils = {
    lg: function() {
        return $( window ).width() >= 1200;
    },
    md: function() {
        return $( window ).width() >= 992 && $( window ).width() < 1200;
    },
    sm: function() {
        return $( window ).width() >= 768 && $( window ).width() < 992;
    },
    xs: function() {
        return $( window ).width() >= 480 && $( window ).width() < 768;
    },
    xxs: function() {
        return $( window ).width() < 480;
    },
    isDesktop: $( window ).width >= 768,
    isTablet: $( window ).width >= 480 && $( window ).width < 768,
    isMobile: $( window ).width < 480,
    breakpoints: [ "xxs", "xs", "sm", "md", "lg" ],
    url: {
        root: window.location.hostname,
        path: window.location.pathname.split( "/" ).splice( 1 )
    },
    lang:   window.location.pathname.split( "/" ).splice( 1 )[ 0 ]
};

}

rh.webux.toggle = {
    attr: {
        openEvent: "data-ux-toggle-open",
        closeEvent: "data-ux-toggle-close-on",
        toggleID: "data-ux-toggle-id",
        toggleTarget: "data-ux-toggle-target",
        state: "data-ux-state",
        align: "data-ux-align-element",
        toggleSingle: "data-ux-toggle-single"
    },
    isAtBreakpoint: function( bpString ) {
        /* This function tests to see the current breakpoint exists in the
            allowed bp strings provided as input */
        var atBreakpoint = true;
        // If the breakpoint string exists and is not empty
        if ( typeof bpString !== "undefined" && bpString !== "" ) {
            // Test that our current breakpoint is in this list of support breakpoints
            var bps = bpString.split( " " );
            atBreakpoint = false;
            // If the first array value is not empty
            $.each( bps, function( idx, bp ) {
                // Check that the bp value is one of the supported breakpoints
                if ( $.inArray( bp, [ "xxs", "xs", "sm", "md", "lg" ] ) >= 0 ) {
                    if ( rh.webux.utils[ bp ]() ) {
                        atBreakpoint = true;
                    }
                }
            } );
        }
        return atBreakpoint;
    },
    getTrigger: function( $target ) {
        var toggleID, $trigger;
        if ( typeof $target !== "undefined" ) {
            toggleID = $target.attr( "id" );
            if ( typeof toggleID !== "undefined" && toggleID !== "" ) {
                $trigger = $( "[" + this.attr.toggleID + "=" + toggleID + "]", context );
            } else {
                $trigger = $target.prev();
            }
        }
        return $trigger;
    },
    getTarget: function( $trigger ) {
        var toggleID, $target;
        if ( typeof $trigger !== "undefined" ) {
            toggleID = $trigger.attr( this.attr.toggleID );
            if ( typeof toggleID !== "undefined" && toggleID !== "" ) {
                $target = $( "#" + toggleID, context );
            } else {
                $target = $trigger.siblings( "[" + this.attr.toggleTarget + "]" );
            }
        }
        return $target;
    },
    reveal: function( $trigger ) {
        var that = this,
            action = false;
        this.getTarget( $trigger ).each( function( idx, el ) {
            // Update state attributes on target and trigger elements
            $( el ).slideDown( "fast" ).attr( that.attr.state, "open" );
            $trigger.attr( that.attr.state, "open" );
            // If the trigger has an alignment attribute, call the align function
            if ( ( typeof $trigger.attr( that.attr.align ) !== "undefined" &&
                    $trigger.attr( that.attr.align ) !== "" ) ||
                $trigger.has( "[" + that.attr.align + "]" ).length > 0 ) {
                rh.webux.alignElement.init( $trigger );
            }
            action = true;
        } );
        return action;
    },
    hide: function( $trigger ) {
        var that = this,
            action = false,
            $target;
        this.getTarget( $trigger ).each( function( idx, el ) {
            $target = $( el );
            if ( $target.attr( that.attr.state ) !== "closed" ) {
                // Update state attributes on target and trigger elements
                $target.slideUp( "fast" ).attr( that.attr.state, "closed" );
                $trigger.attr( that.attr.state, "closed" );
                action = true;
            }
        } );
        return action;
    },
    element: function( $trigger, change ) {
        var that = this,
            bpTargets,
            state, action = false;
        this.getTarget( $trigger ).each( function( idx, el ) {
            state = $trigger.attr( that.attr.state );
            bpTargets = $( el ).attr( that.attr.toggleTarget );
            // If we are approved to toggle
            if ( that.isAtBreakpoint( bpTargets ) || bpTargets === "" ) {
                /* If the state is closed, an empty string,
                or the attribute does not exist, slide down */
                if ( state === "closed" || state === "" ||
                    state === "undefined" || typeof state === "undefined" ) {
                    if ( change ) {
                        action = that.reveal( $trigger ) ? true : action;
                    } else {
                        action = that.hide( $trigger ) ? true : action;
                    }
                } else {
                    if ( change ) {
                        action = that.hide( $trigger ) ? true : action;
                    } else {
                        action = that.reveal( $trigger ) ? true : action;
                    }
                }
            }
        } );
        return action;
    },
    reset: function( $trigger ) {
        var that = this,
            targetBps;
        this.getTarget( $trigger ).each( function( idx, el ) {
            targetBps = $( el ).attr( that.attr.toggleTarget );
            // If not an allowed breakpoint, remove attribute settings
            if ( that.isAtBreakpoint( targetBps ) || targetBps === "" ) {
                that.element( $trigger, false );
            } else if ( $( el ).attr( that.attr.state ) === "closed" ) {
                that.reveal( $trigger );
            }
        } );
    },
    event: function( $trigger, singleTrigger ) {
        var that = this,
            delay = 0,
            hide;
        if ( singleTrigger ) {
            hide = false;
            // Hide sibling elements
            $trigger.siblings( "[" + that.attr.openEvent + "]" ).each( function( idx, el ) {
                hide = that.hide( $( el ) ) ? true : hide;
            } );
            // If any of the siblings have been hidden, add a delay to the UI
            if ( hide ) {
                delay = 200;
            }
            setTimeout( function() {
                that.element( $trigger, true );
            }, delay );
        } else {
            that.element( $trigger, true );
        }
    }
};

/* On load, trigger the closing of any open accordions
    that have a state of closed set and attach click event */

$( "[" + rh.webux.toggle.attr.openEvent + "=hover], [" + rh.webux.toggle.attr.openEvent + "=click]",
    context ).each( function( idx, val ) {
    var $val = $( val ),
        toggleID = $val.attr( rh.webux.toggle.attr.toggleID ),
        eventType = $val.attr( rh.webux.toggle.attr.openEvent ),
        singleTrigger = false;

    // Find out if this element is wrapped in a single toggle attribute
    if ( $val.closest( "[" + rh.webux.toggle.attr.toggleSingle + "]" ).length > 0 ) {
        singleTrigger = true;
    }

    // OnLoad activate current state based on data attribute
    rh.webux.toggle.element( $val, false );
    if ( eventType === "click" ) {
        // OnClick change current state and data attribute
        $val.click( function() {
            rh.webux.toggle.event( $val, singleTrigger );
        } );
    } else if ( eventType === "hover" ) {
        // OnHover change current state and data attribute
        $val.hover( function() {
            rh.webux.toggle.event( $val, singleTrigger );
        } );
    }
} );

/* Trigger the closing by clicking inside the target element */
$( "[" + rh.webux.toggle.attr.closeEvent + "=click]", context ).each( function( idx, val ) {
    var $val = $( val ),
        toggleID = $val.attr( rh.webux.toggle.attr.toggleID );
    // OnClick change current state and data attribute
    rh.webux.toggle.getTarget( $val ).click( function() {
        rh.webux.toggle.element( $val, true );
    } );
} );

// Create debounce function to only trigger calls one time after it finishes resizing,
// instead of hundreds of times while it is updated
$( window ).on( "resize", function() {
    clearTimeout( resizeTimer );
    var that = rh.webux.toggle,
        resizeTimer = setTimeout( function() {
            // Reset any element that have been triggered before resizing and need to be reset.
            $( "[" + that.attr.openEvent + "=hover],[" + that.attr.openEvent + "=click]", context )
                .each( function( idx, val ) {
                    var $val = $( val ),
                        toggleID = $val.attr( that.attr.toggleID );
                    if ( typeof toggleID !== "undefined" && toggleID !== "" ) {
                        that.reset( $val );
                    } else {
                        that.reset( $val );
                    }
                } );
        }, 200 );
} );

// Theme Toggle for Cards
rh.webux.themeToggle = function( target, type, event ) {
    var $target = $( target ),
        attr     = "data-ux-" + type,
        selector = "data-ux-" + type + "-" + event,
        currentType = $target.attr( attr ),
        newType = $target.attr( selector );

    $target.attr( attr, newType );
    $target.attr( selector, currentType );
};

$.each( [ "theme", "background" ], function( idx, type ) {
    $( "[data-ux-" + type + "-hover]", context ).hover( function() {
        rh.webux.themeToggle( this, type, "hover" );
    } );

    $( "[data-ux-" + type + "-click]", context ).click( function() {
        rh.webux.themeToggle( this, type, "click" );
    } );
} );

rh.webux.animation = {
    attr: {
        fireEvent: "data-ux-animation-trigger",
        name: "data-ux-animation-name",
        timing: "data-ux-animation-timing",
        trigger: "data-ux-animation-id",
        target: "data-ux-animation-target",
        styles: "data-ux-animate"
    },
    getTarget: function( $trigger ) {
        var id, $targets;
        if ( typeof $trigger !== "undefined" ) {
            id = $trigger.attr( this.attr.trigger );
            if ( typeof id !== "undefined" && id !== "" ) {
                $targets = $( "[" + this.attr.target + "=" + id + "]", context );
            }
        }
        return $targets;
    },
    animate: function( $el, name, timing ) {
        var that = this,
            animationTimer;
        // Trigger animation
        $el.attr( this.attr.styles, name );
        animationTimer = setTimeout( function() {
            $el.removeAttr( that.attr.styles );
        }, timing );
    },
    event: function( $trigger ) {
        var that = this;
        // Get the target elements and fire the animation status
        var timing = parseInt( $trigger.attr( this.attr.timing ) ),
            name = $trigger.attr( this.attr.name ),
            $targets = this.getTarget( $trigger );
        // If the timing is not set or is not a valid number, default to 300ms
        if ( isNaN( timing ) ) {
            timing = 300;
        }
        if ( typeof $targets !== "undefined" ) {
            $targets.each( function( idx, el ) {
                that.animate( $( el ), name, timing );
            } );
        } else {
            this.animate( $trigger, name, timing );
        }
    }
};

/* On click or hover, trigger the animation event */
$( "[" + rh.webux.animation.attr.fireEvent + "=hover]," +
    " [" + rh.webux.animation.attr.fireEvent + "=click]",
    context ).each( function( idx, val ) {
    var $val = $( val ),
        eventType = $val.attr( rh.webux.animation.attr.fireEvent );

    if ( eventType === "click" ) {
        // OnClick change current state and data attribute
        $val.click( function() {
            rh.webux.animation.event( $val );
        } );
    } else if ( eventType === "hover" ) {
        // OnHover change current state and data attribute
        $val.mouseenter( function() {
            rh.webux.animation.event( $val );
        } );
    }
} );

// Supports tab interactions and direct linking to tabset
// -- Global helper functions

// Attach a string toggle function for use on elements
if ( typeof String.prototype.toggleString == "undefined" ) {
    String.prototype.toggleString = function( string1, string2 ) {
        return ( String( this ) === string1 ) ? string2 : string1;
    };
}

// CUSTOM JS to convert query string to JSON obj
if ( typeof rh.webux.queryToJSON == "undefined" ) {
    rh.webux.queryToJSON = function( input ) {
        var sets = {},
            search = ( typeof input === "undefined" ) ? location.search : input,
            array = ( typeof search != "undefined" ) ? search.slice( 1 ).split( "&" ) : [ "" ];
        $.each( array.filter( function( n ) {
            return n !== "";
        } ), function( idx, val ) {
            var group = val.split( "=" );
            sets[ group[ 0 ] ] = decodeURIComponent( group[ 1 ] || "" );
        } );
        return JSON.parse( JSON.stringify( sets ) );
    };
}

// Supports tab interactions and direct linking to tabset
if ( typeof rh.webux.hash == "undefined" ) {
    rh.webux.hash = function( location ) {
        // Default to window.location
        location = location || window.location;
        return location.hash.replace( /^#/, "" ).split( "." );
    };
}

// Get the height of a hidden or potentially hidden element
if ( typeof rh.webux.getTrueHeight == "undefined" ) {
    rh.webux.getTrueHeight = function( $el ) {
        // Copy element, hide, set height auto and copy current width
        var $copy = $el.clone().css( {
                "display": "block",
                "position": "absolute",
                "top": "-999px",
                "left": "-999px",
                "height": "auto",
                "minHeight": "auto",
                "maxHeight": "auto",
                "width": $el.outerWidth() + "px"
            } ).appendTo( "body" ),
            // Get the height of the clone element
            height = $copy.outerHeight();
        // Remove the cloned element
        $copy.remove();
        return height;
    };
}

//--- Global utility variables
rh.webux.utils = {
    lg: function() {
        return $( window ).width() >= 1200;
    },
    md: function() {
        return $( window ).width() >= 992 && $( window ).width() < 1200;
    },
    sm: function() {
        return $( window ).width() >= 768 && $( window ).width() < 992;
    },
    xs: function() {
        return $( window ).width() >= 480 && $( window ).width() < 768;
    },
    xxs: function() {
        return $( window ).width() < 480;
    },
    isDesktop: $( window ).width >= 768,
    isTablet: $( window ).width >= 480 && $( window ).width < 768,
    isMobile: $( window ).width < 480,
    breakpoints: [ "xxs", "xs", "sm", "md", "lg" ],
    url: {
        root: window.location.hostname,
        path: window.location.pathname.split( "/" ).splice( 1 )
    },
    lang:   window.location.pathname.split( "/" ).splice( 1 )[ 0 ]
};


rh.webux.tab = {
    check:  function( split ) {
        if ( split[ 0 ] === "tab" ) {
            this.switch( split[ 1 ], split[ 2 ] );
        }
    },
    switch: function( id, index ) {
        if ( typeof id !== "undefined" ) {
            $( "[data-ux-tab-id='"  + id +  "']" ).each( function( i, v ) {
                var $children = $( v ).children();
                $children.attr( "data-ux-active", "false" );
                if ( typeof index !== "undefined" ) {
                    $children.eq( index ).attr( "data-ux-active", "true" );
                }
            } );
        }
    }
};

// When the hash changes, check for a tab change
$( window ).bind( "hashchange", function() {
    rh.webux.tab.check( rh.webux.hash( location ) );
} );

// On load, if a url hash exists, run a tab check
if ( window.location.hash ) {
    rh.webux.tab.check( rh.webux.hash() );
}

/**
* Manages the accordion open/closed states
*
* Object literal containing 1 function: click(), which takes 2 inputs:
* - the element clicked
* - a string of the class name for the content container
*/

// Include the helpers tools so that the toggleString function is available
// -- Global helper functions

// Attach a string toggle function for use on elements
if ( typeof String.prototype.toggleString == "undefined" ) {
    String.prototype.toggleString = function( string1, string2 ) {
        return ( String( this ) === string1 ) ? string2 : string1;
    };
}

// CUSTOM JS to convert query string to JSON obj
if ( typeof rh.webux.queryToJSON == "undefined" ) {
    rh.webux.queryToJSON = function( input ) {
        var sets = {},
            search = ( typeof input === "undefined" ) ? location.search : input,
            array = ( typeof search != "undefined" ) ? search.slice( 1 ).split( "&" ) : [ "" ];
        $.each( array.filter( function( n ) {
            return n !== "";
        } ), function( idx, val ) {
            var group = val.split( "=" );
            sets[ group[ 0 ] ] = decodeURIComponent( group[ 1 ] || "" );
        } );
        return JSON.parse( JSON.stringify( sets ) );
    };
}

// Supports tab interactions and direct linking to tabset
if ( typeof rh.webux.hash == "undefined" ) {
    rh.webux.hash = function( location ) {
        // Default to window.location
        location = location || window.location;
        return location.hash.replace( /^#/, "" ).split( "." );
    };
}

// Get the height of a hidden or potentially hidden element
if ( typeof rh.webux.getTrueHeight == "undefined" ) {
    rh.webux.getTrueHeight = function( $el ) {
        // Copy element, hide, set height auto and copy current width
        var $copy = $el.clone().css( {
                "display": "block",
                "position": "absolute",
                "top": "-999px",
                "left": "-999px",
                "height": "auto",
                "minHeight": "auto",
                "maxHeight": "auto",
                "width": $el.outerWidth() + "px"
            } ).appendTo( "body" ),
            // Get the height of the clone element
            height = $copy.outerHeight();
        // Remove the cloned element
        $copy.remove();
        return height;
    };
}


rh.webux.accordion = {
    click: function( el, content ) {
        var $parent = $( el ),
            state = $parent.attr( "data-ux-state" ) || "";
        // Toggle content area open or closed
        $parent.children( content ).slideToggle( ".3s" );
        // Update the state
        $parent.attr(
            "data-ux-state",
            state.toggleString( "open", "closed" )
        );
    }
};

/**
* Progressive enhancement approach:
* For each accordion item that is not already open,
* find the content for that item and hide it
*/
$( ".ux-accordion-item:not([data-ux-state=open])", context ).each( function( key, val ) {
    $( val ).find( ".ux-accordion-content" ).hide();
} );

/**
* Attach the click function to the
* onclick event for the accordion item
*/
$.each( rh.webux.accordion, function( evt, func ) {
    $( ".ux-accordion-item", context ).on( evt, function() {
        func( this, ".ux-accordion-content" );
    } );
} );


        }
    };
} )( window, jQuery, ( "undefined" == typeof rh ) ? {} : rh );
