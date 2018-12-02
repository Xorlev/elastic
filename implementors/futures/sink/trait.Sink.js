(function() {var implementors = {};
implementors["elastic"] = [{text:"impl&lt;TDocument, TResponse&gt; <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/sink/trait.Sink.html\" title=\"trait futures::sink::Sink\">Sink</a> for <a class=\"struct\" href=\"elastic/client/requests/bulk/struct.BulkSender.html\" title=\"struct elastic::client::requests::bulk::BulkSender\">BulkSender</a>&lt;TDocument, TResponse&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TDocument: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.80/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;TResponse: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.80/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"elastic/client/responses/parse/trait.IsOk.html\" title=\"trait elastic::client::responses::parse::IsOk\">IsOk</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["elastic::client::requests::bulk::stream::BulkSender"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
