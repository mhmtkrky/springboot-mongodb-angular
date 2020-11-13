package com.crud.crud.events;

import com.crud.crud.entity.ApplicationEntity;
import com.crud.crud.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class ApplicationModelListener extends AbstractMongoEventListener<ApplicationEntity> {

    private SequenceGeneratorService sequenceGenerator;

    @Autowired
    public ApplicationModelListener(SequenceGeneratorService sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public void onBeforeConvert(BeforeConvertEvent<ApplicationEntity> event) {
        if (event.getSource().getId() < 1) {
            event.getSource().setId(sequenceGenerator.generateSequence(ApplicationEntity.SEQUENCE_NAME));
        }
    }


}
