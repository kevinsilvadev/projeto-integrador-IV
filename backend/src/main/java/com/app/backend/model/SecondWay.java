package com.app.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode(exclude = "codigoDaVia")
@NoArgsConstructor
@Document
public class SecondWay {

    @Id
    @NotBlank
    private String codigoDaVia;

    @NotBlank
    @DBRef
    private Company companyName;

    @NotBlank
    private String address;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Data date;

    List<String> expenses =  new ArrayList<>();

}
